"use client";

import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend,
} from "@/components/kibo-ui/contribution-graph";

type Activity = {
  date: string;
  count: number;
  level: number;
};

export default function GithubActivity({
  data,
}: {
  data: Activity[];
}) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <ContributionGraph data={data} labels={{ totalCount: "{{count}} activities" }}>
        <div className="relative w-full">
          <ContributionGraphCalendar className="touch-scroll pb-2">
            {({ activity, dayIndex, weekIndex }) => (
              <ContributionGraphBlock
                activity={activity}
                dayIndex={dayIndex}
                weekIndex={weekIndex}
              />
            )}
          </ContributionGraphCalendar>
        </div>

        <ContributionGraphFooter className="mt-2 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-xs">
          <ContributionGraphTotalCount className="text-xs sm:text-sm" />
          <ContributionGraphLegend className="text-xs" />
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  );
}
