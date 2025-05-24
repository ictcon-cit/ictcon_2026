import Keynote from "@/components/keynote";
import SecondHeader from "@/components/secondheader";
import { KeyNoteData } from "@/utils/keynote";

const SpeakersPage = () => {
  return (
    <div>
      <SecondHeader title={"SPEAKERS"} />
      <div>
        <Keynote data={KeyNoteData} />
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default SpeakersPage;
