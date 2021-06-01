const ProgressBar = ({ project }) => {
    const calDate = (d1, d2) => {
        let dateArr1 = d1.split('-');
        let dateArr2 = d2.split('-');

        let date1 = new Date(dateArr1[1] + "/" + dateArr1[2] + "/" + dateArr1[0]);
        let date2 = new Date(dateArr2[1] + "/" + dateArr2[2] + "/" + dateArr2[0]);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days;
    }

    const calProgress = (date1, date2) => {
        var d = new Date();
        var mon = d.getMonth() + 1;
        var dateCur = d.getFullYear() + "-" + mon + "-" + d.getDate();

        if (calDate(date1, dateCur) > 0 && calDate(dateCur, date2) > 0) {
            return calDate(date1, dateCur) / calDate(date1, date2) * 100;
        }
        else if (calDate(date1, dateCur) < 0) {
            // return calDate(dateCur, date1) / calDate(dateCur, date2) * 100;
            return 0;
        }
        else {
            return 100;
        }
    }

    const progressWidth = calProgress(project.startDate, project.endDate);


    return (
        <div className='progress-bar'>
            <div className='progress' style={
                progressWidth > 80 ?
                    {
                        width: 100 - progressWidth + "%",
                        // backgroundColor: "hsl(105, 72%," + (50 - progressWidth * 0.3) + "%)"
                        backgroundColor: "white"
                        // background: "linear-gradient(270deg, #D5545F, #EBDD61, #83FAA7)"
                        // backgroundColor: "red"
                    } : {
                        width: 100 -progressWidth + "%",
                        // backgroundColor: "hsl(105, 72%," + (50 - progressWidth * 0.3) + "%)"
                        backgroundColor: "white"
                        // background: "linear-gradient(270deg, #D5545F, #EBDD61, #83FAA7)"
                    }
            }></div>
        </div>
    )

}

export default ProgressBar
