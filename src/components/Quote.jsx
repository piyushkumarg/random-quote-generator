import { useDispatch, useSelector } from "react-redux";
import "./Quote.css";
import { toggleBookmark } from "../redux/slices/bookmarkSlice";
import { FaBookmark, FaRegBookmark,  } from "react-icons/fa";


const Quote = ({ data }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleBookmark(data));
  };

  const quotesinBookmark = useSelector(state=>state.bookmark.quotes);  
  const isPresent = () => {
    return quotesinBookmark.find(q => q._id === data._id) !== undefined;
  }

  

  return (
      <div className="quote">
        <div className="content">{data.content}</div>
        <div className="bottom">
          <div className="author">{data.author}</div>
            <button onClick={handleToggle}>
              {isPresent() ? <FaBookmark/> : <FaRegBookmark />}
            </button>
        </div>
      </div>
  );
};

export default Quote;
