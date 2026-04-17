import { useEffect, useState } from "react";

const SendData = (payload, url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!payload) return; // ✅ control here

    const send = async () => {
      try {
        setLoading(true);

        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    send();
  }, [payload, url]);

  return { data, loading, error };
};

export default SendData;