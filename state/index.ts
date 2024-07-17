import { create } from "zustand";

// Create an interface for the bear store to implement
interface BearStore {
	bears: number;
	subject: string;
	type: string;
	link: string;
	increasePopulation: () => void;
	setSubject: (subject: string) => void;
	setType: (type: string) => void;
	setLinks: (links: string) => void;
}

// Create the bear store, implementing the BearStore interface
const useBearStore = create<BearStore>((set) => ({
	// Set the initial values in the store
	bears: 0,
	subject: "",
	type: "",
	link: "",

	// When this function is fired off, it increases the number of bears by 1
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

	// Function to set the subject
	setSubject: (subject: string) => set({ subject }),

	// Function to set the type
	setType: (type: string) => set({ type }),
	setLinks: (link: string) => set({ link }),
}));

// Export the useBearStore hook
export default useBearStore;
