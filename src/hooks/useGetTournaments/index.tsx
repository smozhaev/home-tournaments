import { useEffect, useState } from "react";
import axios from "axios";
import { ITournament, TGetTournaments } from "./type.ts";

const LIMIT = 3;

const useGetTournaments = (): TGetTournaments => {
  const [datas, setDatas] = useState<ITournament[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/tournaments/records?page=${page}&perPage=${LIMIT}`,
      );
      setDatas(data.items);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      console.log(datas);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [page]);

  return [datas, page, setPage];
};

export default useGetTournaments;
