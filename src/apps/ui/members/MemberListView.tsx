import { useQuery } from "react-query";

import { MembersApi } from "@/apps/infra/api/members";
import { css } from "@emotion/react";
import { CircularProgress, Typography } from "@mui/material";

import { MemberListItem } from "./components/MemberListItem";

export const MemberListViewQueryKey = "MemberListViewData";

export const MemberListView = () => {
  const { data: res, isLoading } = useQuery([MemberListViewQueryKey], () =>
    MembersApi.fetchMembers({ results: 20 })
  );

  // 로딩 중 처리
  if (isLoading) {
    return <CircularProgress />;
  }

  // 데이터 불러오기 실패
  if (!res) {
    return <div>{"데이터 불러오기 실패"}</div>;
  }
  const data = res.data.results;

  return (
    <div css={st.root}>
      <div css={st.inner}>
        <Typography variant={"h4"}>{"멤버 목록"}</Typography>

        <div css={st.list}>
          {data.map((it, index) => (
            <MemberListItem
              key={it.id.name + index}
              id={it.id.name}
              name={it.name.title}
              email={it.email}
              phone={it.phone}
              profileImageUrl={it.picture.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    gap: 48px;

    width: 100%;
    max-width: 1080px;

    margin: 100px 0;
  `,

  list: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
};
