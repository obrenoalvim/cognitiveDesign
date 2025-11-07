'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';
import DesignPreview from '@/components/DesignPreview';
import { Design } from '@/lib/designs-data';

interface DesignCardProps {
  design: Design;
}

export default function DesignCard({ design }: DesignCardProps) {
  return (
    <Card id={design.id} className="scroll-mt-20">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-3">
          {design.biases.map((bias) => (
            <Badge key={bias} variant="secondary">
              {bias}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-3xl">{design.title}</CardTitle>
        <CardDescription className="text-base">{design.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose max-w-none">
          <h4 className="text-lg font-semibold mb-2">Como funciona</h4>
          <p className="text-muted-foreground">{design.explanation}</p>
        </div>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-6">
            <DesignPreview htmlCode={design.htmlCode} cssCode={design.cssCode} />
          </TabsContent>

          <TabsContent value="html" className="mt-6">
            <CodeBlock code={design.htmlCode} language="html" />
          </TabsContent>

          <TabsContent value="css" className="mt-6">
            <CodeBlock code={design.cssCode} language="css" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
