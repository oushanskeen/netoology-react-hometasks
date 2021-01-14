import moment from "moment";
import { useState } from "react";
import "./prettydate.css";

export const DateTimeLocal = ({ time = new Date().toString() }) => (
  <div>
    <div>not pretty</div>
    <div>{time}</div>
  </div>
);
const oldDate = "2020-12-15T17:25:10";
const prettifier = (_time = oldDate) => moment(_time).fromNow();

const DateTime = ({date}) => <p className="date">{date}</p>;
//const DateTimePretty = ({prettifier, date}) => 
//  <DateTime date={prettifier(date)}/>
//const DateTimePretty = (Component) => 
//  <Component date={prettifier(date)}/>
const withPretty = Component => ({prettifier, date}) => 
  <Component date={prettifier(date)}/>;
const DateTimePretty = withPretty(DateTime);
const Video = props => (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    <DateTimePretty prettifier={prettifier} date={props.date}/>
    </div>
  );

const VideoList = (props) => 
  props.list.map(item => 
    <Video url={item.url} date={item.date} />
  )

const box = {
  display:"flex",
  flexDirection:"column",
  margin:0,
  padding:120
};
const Wrapper = ({child}) => (
  <div style={box}>
    {child}
  </div>
);
export function PrettyDate() {
  const [list, setList] = useState([
    {
      url:
        "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: new Date()
    },
    {
      url:
        "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2020-03-03 12:10:00"
    },
    {
      url:
        "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00"
    },
    {
      url:
        "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00"
    },
    {
      url:
        "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00"
    },
    {
      url:
        "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00"
    }
  ]);

  return <VideoList list={list} />;
}
