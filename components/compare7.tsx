import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonCell {
  icon: "✅" | "⚠️" | "❌";
  text: string;
  iconColor?: "green" | "yellow" | "red";
}

interface ComparisonRow {
  feature: string;
  cells: ComparisonCell[];
}

interface Compare7Props {
  title: string;
  columns: string[];
  rows: ComparisonRow[];
  highlightedColumnIndex?: number;
}

const Compare7 = ({
  title,
  columns,
  rows,
  highlightedColumnIndex = 0,
}: Compare7Props) => {
  const getIconColorClass = (iconColor?: string) => {
    switch (iconColor) {
      case "green":
        return "text-green-600";
      case "yellow":
        return "text-yellow-600";
      case "red":
        return "text-red-600";
      default:
        return "text-foreground";
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-semibold">{title}</h2>
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <Table className="rounded border text-left shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-4 font-semibold">功能</TableHead>
                {columns.map((column, index) => (
                  <TableHead
                    key={index}
                    className={`px-6 py-4 font-semibold ${
                      index === highlightedColumnIndex ? "bg-muted" : ""
                    }`}
                  >
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground">
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell className="px-6 py-4">{row.feature}</TableCell>
                  {row.cells.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className={`px-6 py-4 ${
                        cellIndex === highlightedColumnIndex ? "bg-muted" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={getIconColorClass(cell.iconColor)}>
                          {cell.icon}
                        </span>
                        <span>{cell.text}</span>
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { Compare7 };
