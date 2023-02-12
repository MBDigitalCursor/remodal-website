import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import "./dateTimePicker.css";

function DateTimePicker() {
	return (
		<Datetime
			className="date-time"
			timeFormat={true}
			open={true}
		/>
	);
}

export default DateTimePicker;
