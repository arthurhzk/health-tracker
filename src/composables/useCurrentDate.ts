import { ref } from "vue";

export default function useCurrentDate() {
  const currentDate = ref(new Date().toLocaleDateString("pt-BR"));

  const updateDate = () => {
    const date = new Date();
    currentDate.value = date.toLocaleDateString("pt-BR");
  };

  return { currentDate, updateDate };
}
