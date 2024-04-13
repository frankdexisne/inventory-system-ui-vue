import { ref } from "vue";

const useTable = () => {
  const data = ref([]);
  const pagination = ref({
    page: 1,
    pageSize: 5,
    total: 0,
    lastPage: 1,
  });

  const fetchData = () => {
    setTimeout(() => {
      data.value = [];
    }, 500);
  };

  return {
    data,
    fetchData,
    pagination,
  };
};

export default useTable;
