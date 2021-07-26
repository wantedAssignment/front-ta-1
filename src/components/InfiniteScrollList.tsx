import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import { getComments } from '../api';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

type Data = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const Box = styled.div`
  padding: 10px;
  width: 500px;
  height: 193px;
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
`;

function InfiniteScrollList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [comment, setComments] = useState<Data[]>([]);
  const page = useInfiniteScroll();

  async function fetchInitial() {
    try {
      const { data } = await getComments(page);
      setComments(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function fetchMore() {
    try {
      const { data } = await getComments(page);
      setComments([...comment, ...data]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitial();
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchMore();
  }, [page]);

  return (
    <>
      {comment.map((v) => (
        <Box key={v.id}>
          <Title>
            <span>Comment Id </span>
            <span>{v.id}</span>
          </Title>
          <Title>
            <span>Email </span>
            <span>{v.email}</span>
          </Title>
          <Title>Comment</Title>
          <div>{v.body}</div>
        </Box>
      ))}
    </>
  );
}

export default InfiniteScrollList;
