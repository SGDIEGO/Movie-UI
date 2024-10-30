export const fetchData = async (url: string, init? : RequestInit) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    return null
  }

  const jsonData = await response.json();
  return jsonData;
};
