import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function JobCarousel() {
  return (
    <Carousel className="mt-4 sm:static sm:flex sm:flex-col sm:items-end xl:relative">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-10/12 lg:basis-1/2 xl:basis-1/3"
          >
            <Card className="transition-all hover:cursor-pointer hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl">Frontend Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="flex flex-col">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex flex-row gap-5">
        <CarouselPrevious className="hidden sm:static sm:inline-flex xl:absolute" />
        <CarouselNext className="hidden sm:static sm:inline-flex xl:absolute" />
      </div>
    </Carousel>
  );
}
