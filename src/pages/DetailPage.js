import DetailTop from '../components/detail/DetailTop';
import DetailContent from '../components/detail/DetailContent';
import DetailPick from '../components/detail/DetailPick';
import DetailKeyword from '../components/detail/DetailKeyword';

const DetailPage = () => {
  return (
    <div className="detail-page">        
        <DetailTop />
        <DetailContent />
        <DetailPick />
        <DetailKeyword />
    </div>
  );
};

export default DetailPage;
