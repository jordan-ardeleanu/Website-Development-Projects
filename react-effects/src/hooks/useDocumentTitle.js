import { useEffect } from "react";

export const useDocumentTitle = (givenTitle, fallbackTitle) => {
    useEffect(() => {
        document.title = givenTitle;
        return () => {
            document.title = fallbackTitle;
        };
    }, [givenTitle, fallbackTitle]);
};