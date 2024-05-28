import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { ITournament, TGetPlayers } from "./type.ts";

const LIMIT = 10;

const useGetPLayers = (id: any): TGetPlayers => {
  const [page, setPage] = useState<number>(1);
  const [dataTournament, setDataTournament] = useState<ITournament[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const fetchTournament = async () => {
    const startTime = Date.now();
    const MIN_EXECUTION_TIME = 3000;
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/players/records?filter=(tournament=%27${id}%27)&page=${page}&perPage=${LIMIT}`,
      );
      setDataTournament((prev) => [...prev, ...data.items]);
    } catch (error) {
      console.log("Error fetching univer...", error);
    } finally {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      if (elapsedTime < MIN_EXECUTION_TIME) {
        await new Promise((resolve) => setTimeout(resolve, MIN_EXECUTION_TIME - elapsedTime));
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchTournament();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  return [dataTournament, loading, ref];
};

export default useGetPLayers;
