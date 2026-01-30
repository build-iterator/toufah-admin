import Pagination from "rc-pagination";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { useSearchParams } from "react-router";

const CustomPagination = ({ data, pageSize, pageKey, showTotalCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get(pageKey || "page") || 1;
  return (
    <Pagination
      current={page}
      total={data?.count}
      showTotal={(total, range) =>
        showTotalCount && `${range[0]}-${range[1]} of ${total}`
      }
      pageSize={pageSize || 50}
      showLessItems
      onChange={(page) => {
        setSearchParams((prev) => {
          prev.set(pageKey || "page", page);
          return prev;
        });
      }}
      align="center"
      className="mx-auto items-center flex gap-2 ant-pagination"
      nextIcon={
        <Button variant="ghost" size="icon">
          <ChevronRight />
        </Button>
      }
      prevIcon={
        <Button variant="ghost" size="icon">
          <ChevronLeft />
        </Button>
      }
      jumpPrevIcon={
        <Button variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      }
      jumpNextIcon={
        <Button variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      }
    />
  );
};

export default CustomPagination;
