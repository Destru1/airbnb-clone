import axios from "axios";
import { SafeUser } from "../types";
import { useRouter } from "next/navigation";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

interface IUseFavourite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavourite = ({ listingId, currentUser }: IUseFavourite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }
      try {
        let request;
        if (isFavourite) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
          toast.success("Unfavourited listing");
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
          toast.success("Favourited listing");
        }
        await request();
        router.refresh();
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, isFavourite, listingId, loginModal, router]
  );
  return { isFavourite, toggleFavourite };
};

export default useFavourite;
