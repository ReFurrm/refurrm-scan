import { stories } from '../data/mockData';
import StoryCard from './StoryCard';

export default function ImpactFeed() {
  return (
    <section id="impact-feed" className="bg-[#F6F4EE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-4">
          Live Impact Feed
        </h2>
        <p className="font-['Open_Sans'] text-xl text-[#315E47] text-center mb-12 max-w-3xl mx-auto">
          Every item returned restores dignity. Every sale fuels another rescue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#315E47] text-[#F6F4EE] px-8 py-4 rounded-full font-['Poppins'] font-semibold hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
}
