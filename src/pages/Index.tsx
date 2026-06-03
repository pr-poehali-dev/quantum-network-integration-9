import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/7417acce-607f-4b7c-bf1d-db2d78e6329d.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/bff99604-cb25-4b79-9b15-a089557e4bf5.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/100bb521-91bd-455a-a6a1-dada5b3fda40.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/05a2dec1-9013-4da3-bd65-1c5501e40019.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/e161760d-838c-4405-b00b-74316f782f59.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/89eb95bb-6bac-416d-a5b5-f5db3cbcd78b.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/8c1a54dd-3e6d-4641-a542-9a29c67fad12.jpg",
    "https://cdn.poehali.dev/projects/dac77b55-0761-42d4-930d-8db9d1bf780c/files/8e79a2c3-4a06-423b-aad4-e856ba3197e8.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;