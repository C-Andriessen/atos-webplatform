function ExplanationSection() {
  return (
    // <div className="flex px-14 justify-between flex-wrap mt-48">
    //   <div className="w-7/12 space-y-7">
    //     <h4 className="text-3xl text-light">uitleg</h4>
    //     <h2 className="text-5xl text-white font-bold">
    //       Hoe werkt de <span className="text-primary">website</span>
    //     </h2>
    //     <p className="text-2xl text-light w-10/12 border-b-2 border-text pb-12">
    //       Hier komt een uitleg zodat de bezoeker precies weet wat deze website
    //       voor inhoud heeft en hoe ze het moeten gebruiken.
    //     </p>
    //   </div>
    //   <video
    //     src="/videos/video.mp4"
    //     controls
    //     className="object-cover w-5/12 h-96  rounded-xl"
    //   ></video>
    // </div>
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-light sm:text-base lg:text-sm xl:text-base">
              Uitleg
            </span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-light">Bekijk deze video</span>
              <span className="block text-primary">voor uitleg</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-light sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            In deze korte video word u zo goed mogelijk uitgelegd wat deze wij u
            kunnen aanbieden via onze website en hoe u het platform kunt
            gerbuiken!
          </p>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <button
              type="button"
              className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Watch our video to learn more</span>
              <video
                controls
                className="w-full"
                src="./videos/video.mp4"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ExplanationSection;
