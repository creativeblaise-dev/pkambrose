import { Section } from "../layout/Section"

export function Bio() {
  return (
    <Section id="bio">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-6">
            The Story
          </h2>
          <div className="space-y-4 text-body leading-relaxed">
            <p>
              Pk Ambrose, is based in London and a native of Ghana, a West African country
              famous for its natural resources and the famous music genre called Hi-Life
              which is believed to be the origin of Jazz and Rock 'N' Roll.
            </p>
            <p>
              His affiliation with the music and arts industry began at age nine when he was
              in Achimota School where music was a compulsory academic programme. This was a
              preamble to his eventual admission to the prestigious Rev John-Teye Memorial
              Institute also noted for its musical pedigree and academics.
            </p>
            <p>
              While at Rev John-Teye, he performed with the school band during academic term
              activities including ensemble performance and the organisation of school concerts
              and entertainment events until his graduation. Philip gained early band experience
              by numerous tours the school embarked on of which he was privileged to be included.
            </p>
            <p>
              He has toured as a Bass Player and Musical Director for various established artists
              such as Jazz pianist Ed Bentley, Greg Osby, Constant Boty, Grammy Award winner
              Oran Erkin, Grammy Nominee Benito Gonzalez and the legendary power house band
              Osibisa, whom he is still touring with.
            </p>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative">
          <div className="aspect-[3/4] bg-background-card rounded-lg overflow-hidden">
            <img
              src="/images/bassplayer.jpg"
              alt="Philip K. Ambrose playing bass guitar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
        </div>
      </div>
    </Section>
  )
}
