

export default function blog() {
  return (
    <section>
      <div className="max-w-[55rem] w-full mx-auto px-4">
        <div className="grid grid-cols-1">
          <div className="mb-5">
            <h1 className="text-3xl font-bold mb-3">This is Our Last & Latest Feature</h1>
            <p className="mb-3 text-red-500"> that can be made for all developer to use full for the info</p>
             <p className="text-[19px] text-red-400">We're happy to share the release of Vite 7! It has been 5 years since Evan You sent the first commit to the Vite repo, and nobody could have predicted how much the frontend ecosystem would change since then</p>
            </div>

            <div className="mb-5">
            <h1 className="text-3xl font-bold mb-3">Latest Experiments</h1>
            <p className="mb-3 text-blue-400"> that can be made for all developer to use full for the info</p>
             <p className="text-[19px] text-blue-400">Experimental: If you're using a library with many deep imports, you can also specify a trailing glob pattern to pre-bundle all deep imports at once. This will avoid constantly pre-bundling whenever a new deep import is used. Give Feedback. </p>
            </div> 
              <div className="mb-5">
            <h1 className="text-3xl font-bold mb-3">CONFIGURE</h1>
            <p className="mb-3 text-purple-400"> that can be made for all developer to use full for the info</p>
             <p className="text-[19px] text-purple-400">Vite plugins that apply to the worker bundles. Note that config.plugins only applies to workers in dev, it should be configured here instead for build. The function should return new plugin instances as they are used in parallel rollup worker builds. As such, modifying config.worker options in the config hook will be ignored.</p>
            </div>
              <div className="mb-5">
            <h1 className="text-3xl font-bold mb-3">Usefull For Developers</h1>
            <p className="mb-3 text-pink-400"> that can be made for all developer to use full for the info</p>
             <p className="text-[19px] text-pink-700">Through a partnership between VoidZero and NuxtLabs, Anthony Fu is working on creating Vite DevTools. They will offer deeper and more insightful debugging and analysis for all Vite-based projects and frameworks. You can read more on the VoidZero and NuxtLabs join forces on Vite Devtools blog post.</p>
            </div>

        </div>

      </div>
    </section>
  )
}
