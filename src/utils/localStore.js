export const setData = (data) => {
  localStorage.setItem('budget-planner-data', JSON.stringify(data));
};
export const getData = () => {
  const data = localStorage.getItem('budget-planner-data');
  if (data) {
    return data;
  }
  return JSON.stringify({ budget: 1000, expenses: [] });
};
