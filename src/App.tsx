import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Upload, List, FileImage, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component() {
  const [measures] = useState([
    {
      customer_code: "001",
      measures: [
        {
          measure_uuid: "abc123",
          measure_datetime: "2023-06-10T10:00:00",
          measure_type: "Type A",
          has_confirmed: true,
          image_url: "https://example.com/image1.jpg",
        },
        {
          measure_uuid: "def456",
          measure_datetime: "2023-06-11T14:30:00",
          measure_type: "Type B",
          has_confirmed: false,
          image_url: "https://example.com/image2.jpg",
        },
      ],
    },
  ]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full min-h-[500px] max-h-[500px] max-w-4xl border-t-[12px] border-blue-500 border-x-0 border-b-0 overflow-y-hidden shadow-xl">
          <CardHeader className="pt-4">
            <CardTitle>
              <div className="flex justify-between items-center">
                <span className="font-bold text-2xl text-blue-600">
                  SIGAC -{" "}
                  <small className="text-gray-700">Sistema Integrado de Gestão de Água e Gás</small>
                </span>
                <nav>
                  <NavLink
                    to="/upload"
                    className={({ isActive }) =>
                      `text-gray-700 px-3 py-2 rounded-md text-sm font-medium mr-2 ${
                        isActive
                          ? "bg-gray-100 font-semibold"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    <Upload className="inline-block mr-1" size={18} />
                    Upload
                  </NavLink>
                  <NavLink
                    to="/list"
                    className={({ isActive }) =>
                      `text-gray-700 px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "bg-gray-100 font-semibold"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    <List className="inline-block mr-1" size={18} />
                    Lista
                  </NavLink>
                </nav>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-auto max-h-[400px]">
              <Routes>
                <Route
                  path="/upload"
                  element={
                    <form className="space-y-4 px-1">
                      <div>
                        <Label htmlFor="code">Código</Label>
                        <Input id="code" placeholder="Digite o código" />
                      </div>
                      <div>
                        <Label htmlFor="date">Data</Label>
                        <Input id="date" type="datetime-local" />
                      </div>
                      <div>
                        <Label htmlFor="type">Tipo</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="typeA">WATER</SelectItem>
                            <SelectItem value="typeB">GAS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="image">Imagem</Label>
                        <Input id="image" type="file" accept="image/*" />
                      </div>

                      <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-md">Enviar</Button>
                    </form>
                  }
                />
                <Route
                  path="/list"
                  element={
                    <div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Código do Cliente</TableHead>
                            <TableHead>UUID da Medida</TableHead>
                            <TableHead>Data e Hora</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Confirmado</TableHead>
                            <TableHead>Imagem</TableHead>
                            <TableHead>Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-gray-200">
                          {measures.map((customer) =>
                            customer.measures.map((measure) => (
                              <TableRow key={measure.measure_uuid}>
                                <TableCell>{customer.customer_code}</TableCell>
                                <TableCell>{measure.measure_uuid}</TableCell>
                                <TableCell>
                                  {new Date(
                                    measure.measure_datetime
                                  ).toLocaleString()}
                                </TableCell>
                                <TableCell>{measure.measure_type}</TableCell>
                                <TableCell>
                                  {measure.has_confirmed ? "Sim" : "Não"}
                                </TableCell>
                                <TableCell className="text-center ">
                                  <a
                                    href={measure.image_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FileImage
                                      className="inline-block"
                                      size={18}
                                    />
                                  </a>
                                </TableCell>
                                <TableCell>
                                  <Button
                                    size="sm"
                                    className="bg-green-500 text-white hover:bg-green-600"
                                  >
                                    <Check className="mr-1" size={14} />
                                    Confirmar
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  }
                />
              </Routes>
            </div>
          </CardContent>
        </Card>
      </div>
    </Router>
  );
}
