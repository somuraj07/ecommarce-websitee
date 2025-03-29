"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/model";

export const StoreModal = () => {
const storeModal = useStoreModal();

    return (
    <Modal
    title="create store"
    description="add a new store"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
        future create a store form
    </Modal>
    );
}