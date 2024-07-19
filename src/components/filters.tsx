import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function Filters() {
  return (
    <div className="mb-6 flex flex-row gap-4">
      <Input type="text" placeholder="Pesquisar vagas" />

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Filtros</Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <div className="grid gap-4">
            <h4 className="font-medium leading-none">Área de Atuação</h4>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <Checkbox id="backend" />
                <Label htmlFor="backend">Backend</Label>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Checkbox id="frontend" />
                <Label htmlFor="frontend">Frontend</Label>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Checkbox id="mobile" />
                <Label htmlFor="mobile">Mobile</Label>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Checkbox id="data" />
                <Label htmlFor="data">Dados</Label>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Checkbox id="qa" />
                <Label htmlFor="qa">QA</Label>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Select defaultValue="relevance">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Ordenar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ordenar por</SelectLabel>
            <SelectItem value="relevance">Relevância</SelectItem>
            <SelectItem value="recent">Mais recente</SelectItem>
            <SelectItem value="oldest">Mais antigo</SelectItem>
            <SelectItem value="comments">Mais comentários</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
