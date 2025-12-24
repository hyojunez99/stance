import listDate from "../../assets/data/RunnigNews.json";
import "./CategorySection.scss";

const CategorySection = () => {
  return (
    <section id="runningnews">
      <h2>Running News</h2>
      <ul>
        {listDate.map((item, idx) => (
          <li key={idx}>
            <img
              src={require(`../../assets/images/News/${item.image}`)}
              alt={item.title}
            />
            <div className="news-title">
              <p>{item.title}</p>
              <div className="news-txt">
                <p>#{item.sub1}</p>
                <p>#{item.sub2}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
