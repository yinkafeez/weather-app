import { BsCalendar2Date } from "react-icons/bs";
export default function CurDate() {
  //const [curDate, setCurDate] = useState(new Date());
  const curDate = new Date();
  return (
    <div>
      <span>
        <BsCalendar2Date
          style={{ width: "20px", height: "15px", marginRight: "0.7rem" }}
        />
      </span>
      <span>{curDate.toDateString()}</span>
    </div>
  );
}
