import ImportantDates from "@/components/importantdates";
import SecondHeader from "@/components/secondheader";

export default function Dates() {
    return (
        <div className='min-h-screen'>
            <div>
                <SecondHeader title={"IMPORTANT DATES"} />
            </div>
<div>
    <ImportantDates/>
</div>
        </div>
    )
}