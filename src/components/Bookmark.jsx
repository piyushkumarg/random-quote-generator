import { useSelector } from "react-redux";
import "./Bookmark.css";
import Quote from "./Quote";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmark.quotes);

  return bookmarks.length !== 0 ? (
    <div className="bookmark">
      {bookmarks.map((quote) => {
        return <Quote key={quote._id} data={quote} />;
      })}
    </div>
  ) : (
    <h1>Bookmark is empty</h1>
  );
};

export default Bookmark;
