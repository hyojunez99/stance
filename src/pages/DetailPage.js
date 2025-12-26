import React from "react";
import { useParams } from "react-router-dom";
import DetailTop from "../components/detail/DetailTop";
import DetailContent from "../components/detail/DetailContent";
import DetailPick from "../components/detail/DetailPick";
import DetailKeyword from "../components/detail/DetailKeyword";

const DetailPage = () => {
  const { id } = useParams(); // URL에서 'id' 파라미터 가져오기

  return (
    <div className="detail-page">
      <DetailTop />
      <DetailContent id={id} /> {/* id를 DetailContent에 전달 */}
      <DetailPick />
      <DetailKeyword />
    </div>
  );
};

export default DetailPage;

