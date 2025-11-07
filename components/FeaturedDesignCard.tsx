import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface FeaturedDesignCardProps {
  title: string;
  biases: string[];
  description: string;
  slug: string;
}

export default function FeaturedDesignCard({
  title,
  biases,
  description,
  slug,
}: FeaturedDesignCardProps) {
  return (
    <Card className="transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-3">
          {biases.map((bias) => (
            <Badge key={bias} variant="secondary">
              {bias}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/designs#${slug}`}>
          <Button variant="outline" className="w-full group">
            Ver exemplo completo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
