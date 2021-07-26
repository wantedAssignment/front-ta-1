/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export function useInfiniteScroll() {
  const [page, setPage] = useState<number>(1);
  function handleScroll() {
    if (
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.scrollHeight
    ) {
      setPage((p) => p + 1);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return page;
}
