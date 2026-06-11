import WorkExperience from './components/WorkExperience'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter deep-color">
      Hello! I'm Afrah, a General Theorist. 
      </h1>
      <p className="mb-4">
        {`And I like solving peoples problems. Maybe it comes from the fact that I'm the eldest daughter of an asian household or that I'm a polymath, which makes me curious about literally everything. 
       `}
      </p>
      <p className="mb-4">
        {`I've done alot like be the CEO of Neurolink and build Riko Labs, a software firm with a focus on AI for women led startups. I've worked on technical stuff like ML algorithms and deep learning models, published a few papers on the side too. Take a look at my rejections page if you want to see my soft skills. Currently I'm the the CEO of IntelligentSA and Shimmn, companies I founded. I haven't made it (yet) but I'm going to use this place to document my journey.    
  
       `}
      </p>
      <p> { `Feel free to reach out if you want to have a mentally sparring conversation.`}</p>
      <div className="my-8">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        <a href="experience" className="flex items-center space-x-2">
          <span>Experience</span>
          <span className="text-lg">&rarr;</span> {/* Right arrow */}
        </a>
      </h1>
      </div>
    </section>
  )
}
