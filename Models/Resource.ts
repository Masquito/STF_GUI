export interface Resource{
    U_RID : number; //Unique Resource Id
    quality : number;
    name : String;
    weight: number;
    imagePinata_CID?: string;
    quantity?: number;
}

export const resources: Resource[] = [
    { U_RID: 0, name: "Velirium", quality: 1,  weight: 5, imagePinata_CID: "bafybeidhisuxxsmzbksvtzfg4kyzfhvtiyequrpyoiakshz27wwgs4ro4a" },
    { U_RID: 1, name: "Quemitum", quality: 4, weight: 2, imagePinata_CID: "bafybeiecgdvjzvidhyufgptrygz6ksipiowtqdpqzhwofhuw2wpjj3cnqi" },
    { U_RID: 2, name: "Filris", quality: 2,  weight: 10 },
    { U_RID: 3, name: "Zynetherium", quality: 5,  weight: 1 },
    { U_RID: 4, name: "Voidium", quality: 1, weight: 7 },
    { U_RID: 5, name: "Heliplasma", quality: 3, weight: 4 },
    { U_RID: 6, name: "Lithium", quality: 2, weight: 3 },
    { U_RID: 7, name: "Novaquartz", quality: 4, weight: 2 },
    { U_RID: 8, name: "Trionium", quality: 3, weight: 6 },
    { U_RID: 9, name: "Solarite", quality: 5, weight: 1 },
    { U_RID: 10, name: "Crytex", quality: 4, weight: 2 },
    { U_RID: 11, name: "Magnorite", quality: 2, weight: 8 },
    { U_RID: 12, name: "Hedrite", quality: 3, weight: 6 },
    { U_RID: 13, name: "Crytosis", quality: 1, weight: 3 },
    { U_RID: 14, name: "Astheriumite", quality: 2, weight: 7 },
    { U_RID: 15, name: "Starilite", quality: 4, weight: 2 },
    { U_RID: 16, name: "Cryoflux", quality: 1, weight: 6 },
    { U_RID: 17, name: "Zytherium", quality: 3, weight: 5 },
    { U_RID: 18, name: "Thalium", quality: 3, weight: 4 },
    { U_RID: 19, name: "Trilinium", quality: 6, weight: 1 },
    { U_RID: 20, name: "Obsidianite", quality: 2, weight: 5 },
    { U_RID: 21, name: "Solarium", quality: 4, weight: 2 },
    { U_RID: 22, name: "Cytharite", quality: 1, weight: 10 },
    { U_RID: 23, name: "Proxium", quality: 3, weight: 8 },
    { U_RID: 24, name: "Asterite", quality: 5, weight: 1 },
    { U_RID: 25, name: "Mercurium", quality: 3, weight: 7 },
    { U_RID: 26, name: "Aetherium", quality: 5, weight: 2 },
    { U_RID: 27, name: "Solvium", quality: 2, weight: 8 },
    { U_RID: 28, name: "Luminite", quality: 3, weight: 6 },
    { U_RID: 29, name: "Eonianite", quality: 4, weight: 1 },
    { U_RID: 30, name: "Draconium", quality: 6, weight: 1, imagePinata_CID: "bafybeib2ab5cviv3apaos7fw6uh36u6rflvqsbvvlpnawafn4zktwemf3u" },
    { U_RID: 31, name: "Electrum", quality: 3, weight: 9 },
    { U_RID: 32, name: "Astrostone", quality: 3, weight: 7 },
    { U_RID: 33, name: "Vesmatron", quality: 4, weight: 3 },
    { U_RID: 34, name: "Zarathium", quality: 3, weight: 4 },
    { U_RID: 35, name: "Ioidium", quality: 2, weight: 3 },
    { U_RID: 36, name: "Zalthonium", quality: 4, weight: 2 },
    { U_RID: 37, name: "Nephyr", quality: 5, weight: 6 },
    { U_RID: 38, name: "Neutrine", quality: 1, weight: 5 },
    { U_RID: 39, name: "Astralite", quality: 4, weight: 2 },
    { U_RID: 40, name: "Cosmolite", quality: 2, weight: 9 },
    { U_RID: 41, name: "Iridium", quality: 3, weight: 6 },
    { U_RID: 42, name: "Draconite", quality: 1, weight: 6 },
    { U_RID: 43, name: "Vulcrite", quality: 2, weight: 3 },
    { U_RID: 44, name: "Drexium", quality: 4, weight: 2 },
    { U_RID: 45, name: "Moltexium", quality: 2, weight: 7 },
    { U_RID: 46, name: "Cryphium", quality: 3, weight: 9 },
    { U_RID: 47, name: "Solstice", quality: 4, weight: 3 },
    { U_RID: 48, name: "Nebulite", quality: 3, weight: 5 },
    { U_RID: 49, name: "Quantumite", quality: 5, weight: 1 },
    { U_RID: 50, name: "Zanovite", quality: 2, weight: 6 }
];

export const startingResources = [
    { U_RID: 0, name: "Velirium", quality: 1, isNecessaryForHyperdriveContruction: false, weight: 5, imagePinata_CID: "bafybeidhisuxxsmzbksvtzfg4kyzfhvtiyequrpyoiakshz27wwgs4ro4a", quantity: 1000 },
    { U_RID: 1, name: "Quemitum", quality: 4, isNecessaryForHyperdriveContruction: false, weight: 2, imagePinata_CID: "bafybeiecgdvjzvidhyufgptrygz6ksipiowtqdpqzhwofhuw2wpjj3cnqi", quantity: 100 },
    { U_RID: 30, name: "Draconium", quality: 6, isNecessaryForHyperdriveContruction: true, weight: 1, imagePinata_CID: "bafybeib2ab5cviv3apaos7fw6uh36u6rflvqsbvvlpnawafn4zktwemf3u", quantity: 20 },
]

export type ResourcePair = [string, Resource];