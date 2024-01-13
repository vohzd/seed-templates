import { useState, useEffect } from "react";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [newBookmark, setNewBookmark] = useState("");

  useEffect(() => {
    getBookmarks();
  }, []);


  function Bookmark({ details }) {
    return (
      <li key={details.id}>
        <span>{details.url}</span>
        <span onClick={() => deleteBookmark(details.id)}> x</span>
      </li>
    );
  }

  async function deleteBookmark(id) {
    console.log("delete me");
    console.log(id);

  }


  async function getBookmarks() {
    console.log("HELLO");
    // setBookmarks(data);
  }


  const handleNewBookmark = async () => {

    // this simply updates the front end... we need it to update the db...
    //setBookmarks([...bookmarks, { id: bookmarks.length + 1, url: newBookmark }]);

    // do some better validation here...
    if (!newBookmark) return;

    // clear our temp one...
    setNewBookmark("");

    // retreive them to update the front-end...
    getBookmarks();

  };

  return (
    <div className="bookmarks">
      <ul>
        {bookmarks.map(bookmark => <Bookmark key={bookmark.id} details={bookmark} />)}
        <li><input value={newBookmark} onChange={(e) => setNewBookmark(e.target.value)} /></li>
      </ul>
      <button onClick={() => handleNewBookmark()}>add</button>
    </div>
  );

}
