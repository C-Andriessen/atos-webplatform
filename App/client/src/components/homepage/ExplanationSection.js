function ExplanationSection() {
  return (
    <div className="flex px-14 justify-between flex-wrap mt-48">
      <div className="w-7/12 space-y-7">
        <h4 className="text-3xl text-light">uitleg</h4>
        <h2 className="text-5xl text-white font-bold">
          Hoe werkt de <span className="text-primary">website</span>
        </h2>
        <p className="text-2xl text-light w-10/12 border-b-2 border-text pb-12">
          Hier komt een uitleg zodat de bezoeker precies weet wat deze website
          voor inhoud heeft en hoe ze het moeten gebruiken.
        </p>
      </div>
      <video
        src="/videos/video.mp4"
        controls
        className="object-cover w-5/12 h-96  rounded-xl"
      ></video>
    </div>
  );
}

export default ExplanationSection;
