class Solution {
    private List<List<Integer>> Result = new ArrayList<>();
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        nextValue(0, 0, candidates, target, new ArrayList<Integer>());
        return Result;
    }
    private void nextValue(int index, int sum, int[] candidates, int target, List<Integer> Current) {
        if (index >= candidates.length || candidates[index] > target) return;
        int val = candidates[index];
        sum += val;
        Current.add(val);
        int nextIndex = index;
        if (sum == target) {
            Result.add(new ArrayList<Integer>(Current));
        } else if (sum < target) {
            nextValue(index + 1, sum, candidates, target, Current);
        }
        Current.remove(Current.size() - 1);
        sum -= val;
        // if number is dupe, has already started sequence
        nextValue(advanceIndex(index, candidates), sum, candidates, target, Current);
    }
    private int advanceIndex(int index, int[] candidates) {
        int nextIndex = index + 1;
        while (nextIndex < candidates.length && candidates[index] == candidates[nextIndex]) nextIndex++;
        return nextIndex;
    }
}
