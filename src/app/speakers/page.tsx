import Keynote from "@/components/keynote";
import SecondHeader from "@/components/secondheader";
import { KeyNoteData } from "@/utils/keynote";

const SpeakersPage = () => {
  return (
    <div>
      <SecondHeader title={"SPEAKERS"} />
      <div className="text-center mt-5">
        <h2 className="text-2xl font-bold text-gray-600 mb-2">
          ICTCon2025 keynote speakers 
        </h2>
      </div>
      <div>
        <Keynote data={KeyNoteData} />
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default SpeakersPage;
