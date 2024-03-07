class Course {
    public List<Course> nextCourse = new ArrayList<>();
    public int time;
    public int prereqs;
    Course(int t) {
        this.time = t;
    }
}
class Solution {
    public int minimumTime(int n, int[][] relations, int[] time) {
        Course[] courses = new Course[n];
        for (int i = 0; i < courses.length; i++) {
            courses[i] = new Course(time[i]);
        }
        for (int[] rel : relations) {
            int prereq = rel[0] - 1; // these are 1 indexed
            int course = rel[1] - 1;
            courses[course].prereqs += 1;
            courses[prereq].nextCourse.add(courses[course]);
        }
        PriorityQueue<Course> enrolled = new PriorityQueue<>((a, b) -> a.time - b.time);
        for (Course course : courses) {
            if (course.prereqs == 0) enrolled.add(course);
        }
        Course current = null;
        while (!enrolled.isEmpty()) {
            current = enrolled.poll();
            for (Course next : current.nextCourse) {
                if (next.prereqs == 1) {
                    next.time += current.time;
                    enrolled.add(next);
                } else {
                    next.prereqs -= 1;
                }
            }
        }
        return current.time;
    }
}