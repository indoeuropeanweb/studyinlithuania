import { useEffect, useState } from "react";
import axios from "axios";

const SendData = (payload, url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!payload) return;

    const send = async () => {
      try {
        setLoading(true);

        const params = {
          ...payload,
          EnqDate: payload.EnqDate
            ? new Date(payload.EnqDate).toISOString() 
            : "",
          LandingPageUrl: payload.LandingPageUrl?.trim() || "",
        };

        const res = await axios.get(url, {
          params,
        });

        setData(res.data);
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