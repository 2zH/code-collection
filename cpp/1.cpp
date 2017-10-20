#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class MaxDiffLength
{
public:
  static bool compare(string &a, string &b)
  {
    return (a.length() < b.length());
  }

  static int mxdiflg(vector<string> &a1, vector<string> &a2)
  {
    // if (a1.empty() || a2.empty())
    //   return -1;

    int mx = -1;

    for (string x : a1) {

      for (string y : a2) {
        int x1 = x.length();
        int y1 = y.length();
        int diff = abs(x1 - y1);
        
        if (diff > mx)
          mx = diff;
      }
    }

    return mx;
  }
};

int main() {
  vector<string> s1 = {"ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"};
  vector<string> s2 = {"bbbaaayddqbbrrrv"};

  int result = MaxDiffLength::mxdiflg(s1, s2);
  cout << result;
}