import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../../components/videos/Videos";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import ChannelCard from "../../components/channelCard/ChannelCard";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <div>
      <ChannelCard channelDetail={channelDetail} />
      <Videos videos={videos} />
    </div>
  );
}
