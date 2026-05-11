import Page from "./page";
import ContentCard from "./contentCard";
import artProjectOne from './images/artProjectOne.jpg';
import carr from './images/ap-art-carr_orig.jpg';
import cedeno from './images/ap-art-cendeno_orig.jpg';
import karen from './images/ap-art-karen-perry_orig.jpg';
import bell from './images/ap-art-mary-bell_orig.jpg';
import moira from './images/ap-art-moira-donovan_orig.jpg';
import putvain from './images/ap-art-putvain_orig.jpg';
import riffyB from './images/ap-art-riffy-b_orig.jpg';
import rita from './images/ap-art-rita-ciambra_orig.jpg';
import sheila from './images/ap-art-sheila_orig.jpg';
import averill from './images/averill_orig.jpg';
import dolan from './images/dolan_orig.jpeg';
import dan from './images/daniel-gilbert_orig.jpg';
import chad from './images/chad_orig.jpg';
import lindsey from './images/lindsey_orig.jpg';
import michelle from './images/michelle_orig.jpg';
import mark from './images/mark_orig.jpg';
import vandee from './images/vandee_orig.jpg';
import yosko from "./images/yosko_orig.jpg";
import tarah from './images/tarah_orig.jpg';
import trees from './images/trees.jpg';
import astronomy from './images/astronomy.jpg';
import bus from './images/bus.jpg';
import baby from './images/baby.jpg';
import birthday from './images/birthday.jpg';
import camera from './images/camera.jpg';
import coffee from './images/coffee.jpg';
import exit from './images/exit.jpg';
import fuzzy from './images/fuzzy.jpg';
import gpop from './images/gpop.jpg';
import house from './images/house.jpg';
import joy from './images/joy.jpg';
import path from './images/path.jpg';
import school from './images/school.jpg';
import sparks from './images/sparks.jpg';
import stairs from './images/stairs.jpg';
import spirals from './images/spirals.jpg';
import window from './images/window.jpg';
import selfPortrait from './images/portrait.jpg';
import magic from './images/magic.jpg';
import BWOne from './images/BW - (1,1).jpg';
import BWTwo from './images/BW - (1,2).jpg';
import BWThree from './images/BW - (1,3).jpg';
import BWFour from './images/BW - (2,1).jpg';
import BWFive from './images/BW - (2,2).jpg';
import BWSix from './images/BW - (2,3).jpg';
import BWSeven from './images/BW - (3,1).jpg';
import BWEight from './images/BW - (3,2).jpg';
import BWNine from './images/BW - (3,3).jpg';
import BWTen from './images/BW - (4,1).jpg';
import BWEleven from './images/BW - (4,2).jpg';
import BWTwelve from './images/BW - (4,3).jpg';
import BWSeries from './images/BW Series.jpg';
import funky from './images/Funky.jpg';
import './styles.css';
import { useSearch } from './searchContext';
import { useEffect, useRef, useState } from "react";

const artProjects = [
  {
    title: "Portraits in a Magazine",
    year: "2025",
    size: null,
    medium: "charcoal, white charcoal",
    description: "Drew portraits of my boyfriend in a Brooklyn Rail magazine. Created as a final assignment for NYC and the Visual Arts class in fall 2025. The drawing was layered over an advertisement for one of the shows we attended during class.",
    statement: null,
    imageUrl: artProjectOne,
    tags: "portrait drawing pencil magazine brooklyn rail nyc art charcoal 2025",
  },
  {
    title: "The Cycles of Grief",
    year: "2022-2023",
    size:"Variable",
    medium: "watercolor, digital photo editing (snapseed)",
    description: "Digitally edited images of my father and grandfather that I did in high school for my Junio year AP Art concentration",
    statement: "Grief is complicated, I would even argue the most complicated emotion that a person can feel. It’s hard to understand how and when it will show itself. As someone who has experienced many losses in my life I still struggle to fully understand how grief has and will continue to present itself in my day to day life. It can sneak up on you when you least expect it, making you suddenly feel dejected even if you previously felt fine or happy. I once heard someone say something along the lines of “Grief isn’t a process that stops once you get to acceptance, it is a cycle that bounces around until you either die or forget.” Life moves on but the feeling of misery and heartache doesn’t, it just gets easier to deal with. When trying to figure out what I wanted to create for my concentration I originally decided that I wanted to try and capture this idea of grief and what it can feel like to look back on old memories of those lost. For me that meant exploring emotions surrounding the losses of my dad, who died when I was 13, and my grandfather, who passed just two years later in the same month. The main media that I’ve used for my concentration has been digital editing of old photos and pictures of simple watercolor paintings that I’ve made. In each watercolor piece that I made I tried to capture certain emotions, whether that be happiness or acceptance in bright colors like reds, pinks, and yellows, or more somber ideas in darker, cooler tones, like purples and blues. My goal in creating each image was to draw out a strong emotion and feeling of nostalgia. As my concentration grew it shifted to focus more around that notion of nostalgia. Some images in particular portray a feeling of numbness that comes with constant pain and grief while others, like the image of the bus windows, coffee spill, and film camera illustrate how grief can consume your thoughts through day to day activities. Despite the fact that my current concentration doesn't match the original plan I had outlined for myself, I feel that letting go of control and seeing where my thoughts and emotions in the moment took me, allowed me to create a concentration of work more faithful to my experience caught in the cycles of grief.",
    images: [coffee, gpop, trees, birthday, joy, sparks, spirals, fuzzy, camera, window, baby, astronomy, school, exit, bus, stairs, path, house],
    tags: "digital art design 2023 2022 graphic double exposure grief death father dad grandfather watercolor concentration photos",
  },
  {
    title: "Faculty Auras",
    year: "2023-2024",
    size: "Variable",
    medium: "charcoal, white charcoal, chalk pastel",
    description: "Portraits of my teachers from high school that I did for my Senior year AP Art concentration",
    statement: "When I was trying to decide what I wanted to do for my concentration this year I was torn. I had two ideas that I really liked, but only enough time for one. After some internal debate, I finally decided in favor of doing something more positive with my work this time around. I went around and took high contrast photos of staff and faculty. Through editing, I created a black and white image that I then used to create a portrait in one of three materials. Most of my current work is charcoal, with liquid watercolors, forming the backgrounds that represent the 'auras' that each person gives off. The white charcoal is similar in that the watercolor creates the aura, but instead of drawing the shadows, I’m drawing the highlights. The final material is chalk pastel, which was done on matte board rather than the paper I was using for the others. In this case, the background came last, instead, I chose the colors for the face first, the main aura that I get, and the background was made up of the secondary colors of the individual's personality. ",
    images: [vandee, michelle, dan, lindsey, yosko, averill, chad, dolan, karen, bell, carr, sheila, riffyB, moira, rita, cedeno, putvain, mark, tarah],
    tags: "concentration 2023 2024 white charcoal chalk pastel large portrait auras teachers faculty watercolor",
  },
  {
    title: " Highschool Self-Portrait",
    year: "2022",
    size: null,
    medium: "charcoal",
    description: "Charcoal self-portrait that I did for a class in my sophomore year of high school to practice foreshortening",
    imageUrl: selfPortrait,
    tags: "charcoal portrait books foreshortening 2022",
  },
  {
    title: "Magic - Childhood Innocence",
    year: "2024",
    size: null,
    medium: "colored pencil, watercolor, rhinestones, chalk pastel",
    description: "abstract colors paired with drawings of me and two of my siblings when we were younger",
    statement: "When talking about where magic comes from what stood out for me were Santa and the tooth fairy. There is so much you believe in when your young, like magic creatures that hide eggs, give you money for your teeth, or bring you gifts. Children believe in hope and kindness is a way that as you grow sadly disappears. We become cynical as we grow. Many people are always chasing that childhood magic/innocence that they once had, trying to \"heal their inner child.\"",
    imageUrl: magic,
    tags: "watercolor drawing abstract chalk pastel 2024 kids children magic dreams joy happiness rhinestone",
  },
  {
    title: "Black and White Series - Side Profiles",
    year: "2024", 
    size: null,
    medium: "charcoal, white charcoal",
    description: "A series of 12 black and white side profiles done in charcoal and white charcoal",
    statement: null,
    images: [BWSeries, BWOne, BWTwo, BWThree, BWFour, BWFive, BWSix, BWSeven, BWEight, BWNine, BWTen, BWEleven, BWTwelve],
    tags: "portrait white charcoal side 2024 profile",
  },
  {
    title: "Funky Face Portrait",
    year: "2023",
    size: null,
    medium: "water color, white charcoal",
    description: "Freehand portrait of me making a \"Funky Face\". The intentention funky face is to lean in to the warped aspect of trying freehand portraiture for the first time.",
    statement: "Since middle school I’ve seen the funky face portraits made by AP students when walking the halls. I always thought that they were so cool, maybe a little weird, and that the people who were able to make them must be so talented. Even seeing my sister’s hanging in our house I never believed I’d be able to make one as “good.” When the portraits were first introduced to the class I was intimidated, being someone who hates free handing anything with a realistic reference, the idea of having to entirely freehand a piece that big was a bit scary, especially since I would be drawing my own face. I got off to a rocky start when I first tried to create a rough draft, everything felt off, too big, too slanted, too light, just off. It didn’t help that the funky face portraits required me to approach drawing in a way I never had before, drawing only the highlights and lighter areas. After an entire class and a half spent on a draft that I hated, I took it home and completely restarted on the other side of the paper. This time I took more time to really think about what I was doing rather than trying to rush through it. The second rough draft turned out significantly better, I still wasn’t proud of it, but it was definitely better.I didn’t think I was ready or confident enough to start on the final draft, but I did anyway. I had prepared the paper the class before with liquid watercolors, so I got right to drawing. I was struggling a bit at first but once I figured out how, and got used to, using the various dimensions of my eye to measure the distance and size of everything I was able to allow myself to relax a bit.  The whole process was a bit frustrating and stressful. I kept wanting everything to be perfect. Eventually I gave up the notion of “perfect” and just let myself draw. Although I believe the end product could have been better, I am proud of myself for working through the stress and allowing myself to have fun. If I ever did this project again, I would want to use darker colors for the background as well as challenge myself more by choosing a picture with more grey tones now that I’m more used to working with white charcoal.",
    imageUrl: funky,
    tags: "portrait 2023 white charcoal watercolor splatter funky face freehand",
  },
  ];

export default function ArtPortfolio() {
  const { submittedTerm } = useSearch();
  const itemRefs = useRef([]);
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProjects = artProjects.filter(p => {
    const term = filterTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.tags.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    if (!submittedTerm.trim()) return;
    const term = submittedTerm.toLowerCase();
    const firstMatch = itemRefs.current.find(
      el => el && el.dataset.tags?.toLowerCase().includes(term)
    );
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMatch.classList.add('search-highlight');
      setTimeout(() => firstMatch.classList.remove('search-highlight'), 2000);
    }
  }, [submittedTerm]);

  return (
    <Page>
      <h2>Art Portfolio</h2>
      <p className="flip-hint">Click a card to learn more</p>

      <div className="portfolio-search">
        <input
          type="text"
          placeholder="Filter by title, medium, tags…"
          value={filterTerm}
          onChange={e => setFilterTerm(e.target.value)}
          className="portfolio-search-input"
        />
        {filterTerm && (
          <button className="portfolio-search-clear" onClick={() => setFilterTerm('')}>
            ✕
          </button>
        )}
        {filterTerm && (
          <span className="portfolio-search-count">
            {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {!filterTerm && filteredProjects.length === 0 && (
        <p className="no-results">No projects found for "{filterTerm}"</p>
      )}

      <div className="cards-grid">
        {filteredProjects.map((p, i) => (
          <div
            key={p.title}
            ref={el => itemRefs.current[i] = el}
            data-tags={p.tags}
          >
            <ContentCard
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
              images={p.images}
              year={p.year}
              size={p.size}
              medium={p.medium}
              statement={p.statement}
            />
          </div>
        ))}
      </div>
    </Page>
  );
}
