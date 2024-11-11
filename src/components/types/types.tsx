export type Types = {
    beanId: number,
    flavorName: string,
    description: string,
    colorGroup: string,
    backgroundColor: string,
    imageUrl: string,
    glutenFree: boolean,
    sugarFree: boolean,
    seasonal: boolean,
    kosher: boolean,
    groupName: string[],
    ingredients: string[],
};

export type Combination = {
    combinationId: number,
    name: string,
    tag: string [],
};

export type Facts = {
    factId: number,
    title: string,
    description: string,
}

export type History = {
    mileStoneId: number,
    title: string,
    description: string,
}

export type Recipes = {
    recipeId: number,
    title: string,
    description: string,
    cookTime: string,
    makingAmount: string,
}