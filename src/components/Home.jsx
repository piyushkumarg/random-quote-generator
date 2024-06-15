import { useDispatch, useSelector } from "react-redux";
import Quote from "./Quote";
import { getTags, randomQuote } from "../api/api";
import { useEffect, useState } from "react";
import { setQuote } from "../redux/slices/quoteSlice";
import { randomQuoteBytag } from "../api/api";
import "./Home.css";
import { setTags } from "../redux/slices/tagsSlice";
const Home = () => {
  // const [tags, setTags] = useState([]);

  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const tags = useSelector(state => state.tags.tags)

  const fetchQuote = async () => {
    try {
      const res = await randomQuote();
      dispatch(setQuote(res));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTags = async () => {
    try {
      const res = await getTags();
      dispatch(setTags(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!quote)
    fetchQuote();
  }, [quote]);

  useEffect(() => {
    if(tags.length === 0)
    fetchTags();
  }, []);

  const nextQuote = () => {
    fetchQuote();
  };

  const handleOptionChange = async (e) => {
    const option = e.target.value;
    const res = await randomQuoteBytag(option);
    dispatch(setQuote(res));
  };

  if (!quote) return <h1>Loading ...</h1>;

  return (
    <div className="home">
      <Quote data={quote} />
      <div className="home_change">
        <select onChange={handleOptionChange} >
          {tags.map((tag, index) => {
            return (
              <option key={tag._id} value={tag.name}>
                {tag.name}
              </option>
            );
          })}
        </select>

        <button onClick={nextQuote}>Next quote</button>
      </div>
    </div>
  );
};

export default Home;
