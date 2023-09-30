function shuffle(nums: number[], n: number): number[] {
    const items: number[] = [];
    for (let i = 0; i < n; i++) {
        items.push(nums[i]);
        items.push(nums[i + n]);
    }
    return items;
}
