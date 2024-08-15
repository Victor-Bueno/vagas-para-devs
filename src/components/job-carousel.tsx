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
    <Carousel className="mt-4">
      <CarouselContent className="max-w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/3">
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
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  );
}
